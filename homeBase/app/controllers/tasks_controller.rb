class TasksController < ApplicationController
	# before_action :require_login

	def index
		task = Task.all
		render json: task
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

	def require_login
		if !current_user
			flash[:error] = "You must be logged in."
		end
	end
end
