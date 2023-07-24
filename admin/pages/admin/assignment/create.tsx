import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { AssignmentForm } from '../../../components/forms/AssignmentForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create assignment
			</SlotSources.Title>
			<CreateScope entity="Assignment" redirectOnSuccess="admin/assignment/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create assignment" labelSaved="Create assignment" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/assignment/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Assignments
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<AssignmentForm />
				</>
			</CreateScope>
		</>
	)
}
