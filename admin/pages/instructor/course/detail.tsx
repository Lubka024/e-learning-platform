import * as React from 'react'
import { Box, DataGrid, DateCell, DetailScope, DisplayTextField, EnumCell, GenericCell, HasOneSelectCell, LinkButton, NumberCell, Stack, TextCell } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Course detail
			</SlotSources.Title>
			<DetailScope entity="Course(id=$id)">
				<SlotSources.Back>
					<LinkButton to="instructor/course/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Courses
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="instructor/course/edit(id: $entity.id)">
						Edit course
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
								<DisplayTextField field="instructor.name" label="User" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Course materials
								</h2>
								<LinkButton to="instructor/courseMaterial/create">
									Create new course material
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="CourseMaterial[course.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="instructor/courseMaterial/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell field="title" header="Title" />
							<EnumCell
								options={{ pdf: 'pdf', video: 'video', audio: 'audio', image: 'image', text: 'text' }}
								field="fileType"
								header="File type"
							/>
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Assignments
								</h2>
								<LinkButton to="instructor/assignment/create">
									Create new assignment
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Assignment[course.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="instructor/assignment/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell field="title" header="Title" />
							<DateCell field="dueDate" header="Due date" />
							<HasOneSelectCell field="student" header="student" options="User.name" />
							<NumberCell field="grade" header="Grade" />
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
