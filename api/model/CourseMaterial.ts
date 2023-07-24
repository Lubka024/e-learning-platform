import { AclDefinition as acl, SchemaDefinition as def } from '@contember/schema-definition'

import { instructorRole } from './acl'
import { FileType } from './enum'
import { File } from './File'
import { Course } from './Course'


@acl.allow(instructorRole, {
	read: true,
	create: true,
	update: true,
})
export class CourseMaterial {
	title = def.stringColumn()
	description = def.stringColumn()
	fileType = def.enumColumn(FileType).notNull()
	file = def.manyHasOne(File, 'coursematerialFile').setNullOnDelete()
	course = def.manyHasOne(Course, 'courseMaterials')
}
