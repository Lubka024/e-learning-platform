import { AclDefinition as acl, SchemaDefinition as def } from '@contember/schema-definition'

import { instructorRole } from './acl'
import { User } from './User'
import { CourseMaterial } from './CourseMaterial'
import { Assignment } from './Assignment'


@acl.allow(instructorRole, {
	read: true,
	create: true,
	update: true,
})
export class Course {
	title = def.stringColumn()
	description = def.stringColumn()
	instructor = def.manyHasOne(User, 'courses')
	students = def.manyHasManyInverse(User, 'enrolledCourses')
	courseMaterials = def.oneHasMany(CourseMaterial, 'course')
	assignments = def.oneHasMany(Assignment, 'course')
}
