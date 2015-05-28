class FamiliesController < ApplicationController

  def index
  	family = Family.find_by(id: 1)
  	members = family.members
  	render json: members
  end	
end