import * as React from 'react'
import { Component, SelectField, TextField } from '@contember/admin'

export const CourseForm = Component(() => <>
	<TextField field="title" label="Title" />
	<TextField field="description" label="Description" />
	<SelectField field="instructor" label="Instructor" options="User.name" lazy allowNull />
</>)
