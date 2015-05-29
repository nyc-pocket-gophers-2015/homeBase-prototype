class FamiliesController < ApplicationController

  def index
  	family = Family.find_by(id: 1)
  	members = family.members
  	render json: members
  end	

  def create
  	new_family = Family.new(family_params)
  	if new_family.save
  		render json: new_family
  	else
  	end
  end

  def destroy
  	family = Family.find_by(id: params[:id])
  	fam_members = Member.where(family_id: params[:id])
  	fam_rewards = Reward.where(family_id: params[:id])
  	fam_tasks = Task.where(family_id: params[:id])
  	fam_events = Event.where(family_id: params[:id])
  	if family.destroy && fam_members.destroy && fam_events.destroy && fam_tasks.destroy && fam_rewards.destroy
  		flash[:success] = "Your ENTIRE account has been deleted"
  	else
  	end
  end

  private
  def family_params
  	params.require(:family).permit :surname, :email, :password
  end
end