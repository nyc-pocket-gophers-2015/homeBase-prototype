require 'rails_helper'

describe TasksController do
	# let!(:family) { FactoryGirl.create :family }
	let!(:task) {FactoryGirl.create :task}
	let!(:other_task) {FactoryGirl.create :task}
	before(:each) do
    stub_current_user
  end
  context "#index" do
    it "is successful" do
      get :index
      expect(response).to be_success
    end

  	it "assigns tasks to Task.all" do
      get :index
      json = JSON.parse(response.body)
      expect(json.length).to eq(2)
    end  
  end

  context "#create" do
  	
  end
end