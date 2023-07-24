import * as React from 'react'
import { Component, HasRole, Menu, Stack } from '@contember/admin'
import { BookIcon, FileIcon, PencilIcon, UsersIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role={roles => roles.has('admin') || roles.size === 0}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UsersIcon />
			<>
				Users
			</>
		</Stack>}
			to="admin/user/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<BookIcon />
			<>
				Courses
			</>
		</Stack>}
			to="admin/course/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<FileIcon />
			<>
				Course Materials
			</>
		</Stack>}
			to="admin/courseMaterial/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<PencilIcon />
			<>
				Assignments
			</>
		</Stack>}
			to="admin/assignment/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('instructor')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UsersIcon />
			<>
				Users
			</>
		</Stack>}
			to="instructor/user/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<BookIcon />
			<>
				Courses
			</>
		</Stack>}
			to="instructor/course/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<FileIcon />
			<>
				Course Materials
			</>
		</Stack>}
			to="instructor/courseMaterial/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<PencilIcon />
			<>
				Assignments
			</>
		</Stack>}
			to="instructor/assignment/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('student')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<PencilIcon />
			<>
				Assignments
			</>
		</Stack>}
			to="student/assignment/list"
		/>
	</HasRole>
</Menu>)
