import * as React from 'react'
import { Component, HiddenField, MultiSelectField, TextField } from '@contember/admin'

export const UserForm = Component(() => <>
	<HiddenField field="personId" />
	<TextField field="name" label="Name" />
	<TextField field="email" label="Email" />
	<MultiSelectField field="enrolledCourses" label="Enrolled course" options="Course.title" lazy />
</>)
