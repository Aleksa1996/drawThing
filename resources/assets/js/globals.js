const globals = { ...context.__global__ };

if (typeof window !== 'undefined') {
	delete window.context;
}

export default globals;
