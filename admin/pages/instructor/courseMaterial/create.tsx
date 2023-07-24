import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { CourseMaterialForm } from '../../../components/forms/CourseMaterialForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create course material
			</SlotSources.Title>
			<CreateScope entity="CourseMaterial" redirectOnSuccess="instructor/courseMaterial/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create course material" labelSaved="Create course material" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="instructor/courseMaterial/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Course materials
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<CourseMaterialForm />
				</>
			</CreateScope>
		</>
	)
}
