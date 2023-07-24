import * as React from 'react'
import { Component, DateField, NumberField, SelectField, TextField } from '@contember/admin'

export const AssignmentForm = Component(() => <>
	<TextField field="title" label="Title" />
	<TextField field="description" label="Description" />
	<DateField field="dueDate" label="Due date" />
	<SelectField field="course" label="Course" options="Course.title" lazy allowNull />
	<SelectField field="student" label="Student" options="User.name" lazy allowNull />
	<NumberField field="grade" label="Grade" />
</>)
