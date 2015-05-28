class Family < ActiveRecord::Base
	has_secure_password
	has_many :members
	has_many :events
	has_many :rewards
	has_many :tasks

	validates :surname, :email, :password, presence: :true
	validates :email, uniqueness: :true
	validates :password, length: { in: 6..20 }
end
