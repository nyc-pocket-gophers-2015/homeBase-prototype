module AuthenticationHelpers
  def stub_current_user
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(true)
  end

end
