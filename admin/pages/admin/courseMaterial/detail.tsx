import * as React from 'react'
import { Box, DetailScope, DisplayTextField, LinkButton, Stack } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Course material detail
			</SlotSources.Title>
			<DetailScope entity="CourseMaterial(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/courseMaterial/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Course materials
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/courseMaterial/edit(id: $entity.id)">
						Edit course material
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="title" label="Title" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="description" label="Description" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="fileType" label="File type" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="file.name" label="File" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="course.title" label="Course" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
