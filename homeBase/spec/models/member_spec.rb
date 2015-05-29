require "rails_helper"

describe Member do 
	context "validations" do
	subject { FactoryGirl.create(:member) }
	it { should validate_presence_of :role }
	it { should validate_presence_of :name }
    it { should validate_presence_of :family }
    it { should validate_presence_of :color }
    it { should validate_presence_of :img_url }
    it { should belong_to(:family) }
    it { should have_many(:events) }
    it { should have_many(:rewards) }
    it { should have_many(:assigned_tasks) }
    it { should have_many(:completed_tasks) }
	end
end
