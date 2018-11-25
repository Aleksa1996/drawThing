import React from 'react';
import { Field } from 'redux-form';
import { v4 } from 'uuid';

export const createRenderer = render => ({ input, meta, label, className, ...rest }) => (
	<div className={`form-group-wrapper ${className || 'col-md-12'}`}>
		<div className="form-group">
			{rest.type != 'checkbox' && <label htmlFor={input.name}>{label}</label>}
			{render(input, label, rest)}
			{meta.error && meta.touched && <div className="invalid-feedback d-block">{meta.error}</div>}
		</div>
	</div>
);

export const RenderInput = createRenderer((input, label, { type, disabled }) => (
	<input
		{...input}
		type={type || 'text'}
		id={input.name}
		disabled={disabled || false}
		placeholder={label}
		className="form-control"
	/>
));

export const RenderTextarea = createRenderer((input, label, { disabled, options }) => (
	<textarea {...input} id={input.name} disabled={disabled || false} placeholder={label} className="form-control" {...options} />
));

export const RenderSelect = createRenderer((input, label, { disabled, ...rest }) => (
	<select {...input} id={input.name} disabled={disabled || false} className="form-control">
		{rest.children}
	</select>
));

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

export const RenderFile = createRenderer(({ value, onChange, onBlur, ...input }, label, { disabled, ...rest }) => (
	<div className="file-input-field">
		<input
			{...input}
			type="file"
			id={input.name}
			disabled={disabled || false}
			onChange={adaptFileEventToValue(onChange)}
			onBlur={adaptFileEventToValue(onBlur)}
		/>
		{value && (
			<img src={_.get(value, 'type', false) ? URL.createObjectURL(value) : value} className="img-rounded img-responsive" />
		)}
	</div>
));

export const RenderCheckbox = createRenderer((input, label, { disabled, ...rest }) => (
	<div className="form-check">
		<input {...input} type="checkbox" id={input.name} disabled={disabled || false} className="form-check-input" />
		<label className="form-check-label" htmlFor={input.name}>
			{label}
		</label>
	</div>
));

const RenderRadio = ({ input, label, ...rest }) => (
	<div className="form-check">
		<input {...input} type="radio" id={input.name + input.value} className="form-check-input" />
		<label className="form-check-label" htmlFor={input.name + input.value}>
			{label}
		</label>
	</div>
);

export const FieldRadioGroup = ({ label, options, cssClasses, ...rest }) => (
	<div className={`form-group-wrapper ${cssClasses || 'col-md-12'}`}>
		<div className="form-group">
			<label>{label}</label>
			{Object.entries(options).map(([value, text]) => (
				<Field key={v4()} label={text} value={value} component={RenderRadio} {...rest} />
			))}
			<Field
				name={rest.name}
				component={({ meta }) =>
					meta.error ? meta.touched && <div className="invalid-feedback d-block">{meta.error}</div> : null
				}
			/>
		</div>
	</div>
);
