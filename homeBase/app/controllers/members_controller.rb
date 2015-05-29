class MembersController < ApplicationController

	def index
		members = Member.where(family_id: params[:family_id])
		render json: members
	end

	def create 
		member = Member.new(member_params)
		member.family_id = params[:family_id]
		#current_user.family.id
		if member.save
			member.color = member.assign_color
			render json: member
		else
		end
	end

	def destroy
		if current_user.family.id
		member = Member.find_by(id: params[:id])
		if member.destroy
			all_members = Member.all
			render json: all_members
		else
		end
	end

	private 
	def member_params
		params.require(:member).permit :role, :name, :img_url
	end
end