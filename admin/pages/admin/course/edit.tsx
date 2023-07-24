import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { CourseForm } from '../../../components/forms/CourseForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit course
			</SlotSources.Title>
			<EditScope entity="Course(id=$id)" redirectOnSuccess="admin/course/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/course/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<CourseForm />
			</EditScope>
		</>
	)
}
