import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { CourseMaterialForm } from '../../../components/forms/CourseMaterialForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit course material
			</SlotSources.Title>
			<EditScope entity="CourseMaterial(id=$id)" redirectOnSuccess="admin/courseMaterial/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton
						to="admin/courseMaterial/detail(id: $entity.id)"
						size="small"
						className="mr-2"
						distinction="outlined"
					>
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<CourseMaterialForm />
			</EditScope>
		</>
	)
}
