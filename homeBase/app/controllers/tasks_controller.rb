class TasksController < ApplicationController

	def index
		task = Task.all
		render json: task
		# respond_to do |format|
		# 	format.json {render json: task}
		# end
	end

	def create
		@task = Task.new(task_params)
		@task.family_id = current_user.family_id
		if @task.save
			respond_to do |format|
				format.json {render json: @task}
			end
		end
	end


	private
	def task_params
		params.require(:answer).permit :title, :point_value, :assigned_member_id, :deadline
	end
end
