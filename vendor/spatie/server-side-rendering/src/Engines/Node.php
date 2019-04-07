<?php

namespace Spatie\Ssr\Engines;

use Spatie\Ssr\Engine;
use Spatie\Ssr\Exceptions\EngineError;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;

use Swoole\Coroutine as SwooleCo;

class Node implements Engine
{
    /** @var string */
    protected $nodePath;

    /** @var string */
    protected $tempPath;

    public function __construct(string $nodePath, string $tempPath)
    {
        $this->nodePath = $nodePath;
        $this->tempPath = $tempPath;
    }

    // public function run(string $script): string
    // {
    //     $tempFilePath = $this->createTempFilePath();

    //     file_put_contents($tempFilePath, $script);

    //     $process = new Process("{$this->nodePath} {$tempFilePath}");

    //     try {
    //         return substr($process->mustRun()->getOutput(), 0, -1);
    //     } catch (ProcessFailedException $exception) {
    //         throw EngineError::withException($exception);
    //     } finally {
    //         unlink($tempFilePath);
    //     }
    // }

    public function run(string $script): string
    {
        $tempFilePath = $this->createTempFilePath();
        $nodePath = $this->nodePath;

        file_put_contents($tempFilePath, $script);

        $html = null;
        if (env('REDIS_PAGECACHE', false)) {
            // swoole redis co
            $redisClient = new SwooleCo\Redis();
            $redisClient->connect('127.0.0.1', 6379);

            // get requested uri
            $uri = request()->getRequestUri();
            // does uri cached?
            $cached = (bool)$redisClient->exists($uri);
            $html = null;

            if ($cached) {
                $html = $redisClient->get($uri);
            } else {
                $execResult = SwooleCo::exec($nodePath . ' ' . $tempFilePath);
                $html = $execResult['output'];
                $redisClient->set($uri, $html);
            }
        } else {
            $execResult = SwooleCo::exec($nodePath . ' ' . $tempFilePath);
            $html = $execResult['output'];
        }


        try {
            return substr($html ?? '', 0, -1);
        } catch (ProcessFailedException $exception) {
            throw EngineError::withException($exception);
        } finally {
            unlink($tempFilePath);
        }
    }

    public function getDispatchHandler(): string
    {
        return 'console.log';
    }

    protected function createTempFilePath(): string
    {
        return implode(DIRECTORY_SEPARATOR, [$this->tempPath, md5(intval(microtime(true) * 1000) . random_bytes(5)) . '.js']);
    }
}
