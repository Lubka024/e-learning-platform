import { AclDefinition as acl, SchemaDefinition as def } from '@contember/schema-definition'

import { instructorRole } from './acl'
import { CourseMaterial } from './CourseMaterial'


@acl.allow(instructorRole, {
	read: true,
	create: true,
})
export class File {
	url = def.stringColumn().notNull()
	size = def.intColumn()
	type = def.stringColumn().columnType('integer')
	name = def.stringColumn().columnType('integer')
	createdAt = def.dateTimeColumn().notNull().default('now')
	coursematerialFile = def.oneHasMany(CourseMaterial, 'file')
}
