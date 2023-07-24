import * as React from 'react'
import { AnyUploadField, Component, SelectField, TextField } from '@contember/admin'

export const CourseMaterialForm = Component(() => <>
	<TextField field="title" label="Title" />
	<TextField field="description" label="Description" />
	<SelectField
		field="fileType"
		label="File type"
		required
		options={[{ value: 'pdf', label: 'pdf' }, { value: 'video', label: 'video' }, { value: 'audio', label: 'audio' }, { value: 'image', label: 'image' }, { value: 'text', label: 'text' }]}
		allowNull={false}
	/>
	<AnyUploadField baseEntity="file" urlField="url" fileNameField="name" fileTypeField="type" label="File" />
	<SelectField field="course" label="Course" options="Course.title" lazy allowNull />
</>)
