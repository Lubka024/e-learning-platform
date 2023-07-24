import { AclDefinition as acl, SchemaDefinition as def } from '@contember/schema-definition'

import { instructorRole, studentRole, personIdStudentVariable } from './acl'
import { Course } from './Course'
import { Assignment } from './Assignment'

@acl.allow(instructorRole, {
	read: true,
})
@acl.allow(studentRole, {
	when: { personId: personIdStudentVariable },
	read: true,
	update: true,
})
export class User {
	personId = def.uuidColumn()
	name = def.stringColumn()
	email = def.stringColumn()
	enrolledCourses = def.manyHasMany(Course, 'students')
	courses = def.oneHasMany(Course, 'instructor')
	submittedAssignments = def.oneHasMany(Assignment, 'student')
}
