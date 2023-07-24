import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { CourseForm } from '../../../components/forms/CourseForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create course
			</SlotSources.Title>
			<CreateScope entity="Course" redirectOnSuccess="instructor/course/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create course" labelSaved="Create course" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="instructor/course/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Courses
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<CourseForm />
				</>
			</CreateScope>
		</>
	)
}
