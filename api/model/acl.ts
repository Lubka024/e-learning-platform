import { AclDefinition as acl } from '@contember/schema-definition'


export const instructorRole = acl.createRole('instructor', { stages: '*', s3: { ['**']: { upload: true, read: true } } })
export const studentRole = acl.createRole('student', { stages: '*', s3: { ['**']: { upload: true, read: true } } })
export const personIdInstructorVariable = acl.createPredefinedVariable('personId', 'personID', instructorRole)
export const personIdStudentVariable = acl.createPredefinedVariable('personId', 'personID', studentRole)
