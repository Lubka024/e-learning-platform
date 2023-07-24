import * as React from 'react'
import { DataGridScope, GenericCell, HasOneSelectCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Courses
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="instructor/course/create">
					Create new course
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Course" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="instructor/course/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell field="title" header="Title" />
				<HasOneSelectCell field="instructor" header="instructor" options="User.name" />
			</DataGridScope>
		</>
	)
}
