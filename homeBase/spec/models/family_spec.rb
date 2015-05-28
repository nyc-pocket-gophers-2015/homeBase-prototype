require "rails_helper"

describe Family do 
	context "validations" do
		subject { FactoryGirl.create(:family) }
		it { should validate_presence_of :surname }
		it { should validate_presence_of :email }
    it { should validate_uniqueness_of :email }
    it { should have_secure_password }
    it do
      should validate_length_of(:password).
        is_at_least(6).is_at_most(20)
    end
    it { should have_many(:members) }
    it { should have_many(:events) }
    it { should have_many(:rewards) }
    it { should have_many(:tasks) }
	end
end
