class TaskController < ApplicationController
	
	def index
		task = Task.all 
		respond_to do |format|
			format.json task
		end
	end

	def create
		@task = Task.new(task_params)
		@task.family_id = current_user.family_id
		respond_to do |format|
			if @task.save
				format.json @task
			end
		end
	end


	private
	def task_params
		params.require(:answer).permit :title, :point_value, :assigned_member_id, :deadline
	end
end