import * as React from 'react'
import { DataGridScope, DateCell, GenericCell, HasOneSelectCell, LinkButton, NumberCell, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Assignments
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="instructor/assignment/create">
					Create new assignment
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Assignment" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="instructor/assignment/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell field="title" header="Title" />
				<DateCell field="dueDate" header="Due date" />
				<HasOneSelectCell field="course" header="course" options="Course.title" />
				<HasOneSelectCell field="student" header="student" options="User.name" />
				<NumberCell field="grade" header="Grade" />
			</DataGridScope>
		</>
	)
}
