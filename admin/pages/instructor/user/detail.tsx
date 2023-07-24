import * as React from 'react'
import { Box, DataGrid, DateCell, DetailScope, DisplayTextField, GenericCell, HasOneSelectCell, LinkButton, NumberCell, Stack, TextCell } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				User detail
			</SlotSources.Title>
			<DetailScope entity="User(id=$id)">
				<SlotSources.Back>
					<LinkButton to="instructor/user/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Users
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="email" label="Email" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Courses
								</h2>
								<LinkButton to="instructor/course/create">
									Create new course
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Course[students.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="instructor/course/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell field="title" header="Title" />
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Courses
								</h2>
								<LinkButton to="instructor/course/create">
									Create new course
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Course[instructor.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="instructor/course/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell field="title" header="Title" />
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
						<DataGrid entities="Assignment[student.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="instructor/assignment/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell field="title" header="Title" />
							<DateCell field="dueDate" header="Due date" />
							<HasOneSelectCell field="course" header="course" options="Course.title" />
							<NumberCell field="grade" header="Grade" />
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
