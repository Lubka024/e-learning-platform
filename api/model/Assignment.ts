import { AclDefinition as acl, SchemaDefinition as def } from '@contember/schema-definition'

import { instructorRole, studentRole, personIdStudentVariable } from './acl'
import { Course } from './Course'
import { User } from './User'


@acl.allow(instructorRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(studentRole, {
	when: { student: { personId: personIdStudentVariable } },
	read: true,
	create: true,
	update: true,
})
export class Assignment {
	title = def.stringColumn()
	description = def.stringColumn()
	dueDate = def.dateColumn()
	course = def.manyHasOne(Course, 'assignments')
	student = def.manyHasOne(User, 'submittedAssignments')
	grade = def.intColumn()
}
