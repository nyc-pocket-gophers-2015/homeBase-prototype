require "rails_helper"

describe Task do 
	context "validations" do
	subject { FactoryGirl.create(:task) }

	it { should validate_presence_of :title }
	it { should validate_presence_of :point_value }
    it { should validate_presence_of :family }
    it { should belong_to(:family) }
    it { should belong_to(:assigned_member) }
    it { should belong_to(:completed_member) }
	end
end
