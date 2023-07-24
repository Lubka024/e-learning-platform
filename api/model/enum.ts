import { SchemaDefinition as def } from '@contember/schema-definition'


export const FileType = def.createEnum('pdf', 'video', 'audio', 'image', 'text')
