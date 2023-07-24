import * as React from 'react'
import { DataGridScope, DeleteEntityButton, EnumCell, GenericCell, HasOneSelectCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Course materials
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="admin/courseMaterial/create">
					Create new course material
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="CourseMaterial" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/courseMaterial/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell field="title" header="Title" />
				<EnumCell
					options={{ pdf: 'pdf', video: 'video', audio: 'audio', image: 'image', text: 'text' }}
					field="fileType"
					header="File type"
				/>
				<HasOneSelectCell field="course" header="course" options="Course.title" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
