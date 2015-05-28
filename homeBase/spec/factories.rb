FactoryGirl.define do
  factory :family do
    surname        { Faker::Name.last_name }
    email          { Faker::Internet.email }
    password       { Faker::Lorem.characters(10) }
  end

  
end