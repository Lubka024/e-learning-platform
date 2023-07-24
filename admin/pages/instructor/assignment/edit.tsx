import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { AssignmentForm } from '../../../components/forms/AssignmentForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit assignment
			</SlotSources.Title>
			<EditScope entity="Assignment(id=$id)" redirectOnSuccess="instructor/assignment/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton
						to="instructor/assignment/detail(id: $entity.id)"
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
				<AssignmentForm />
			</EditScope>
		</>
	)
}
