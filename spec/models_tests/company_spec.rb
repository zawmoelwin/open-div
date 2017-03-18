require 'rails_helper'

RSpec.describe Company, type: :model do

	  context "#validations" do
			it { should validate_presence_of(:name) }
			it { should validate_presence_of(:city_name) }
			it { should validate_presence_of(:region_name) }
			it { should validate_presence_of(:country_code) }
			it { should belong_to(:creator_id)}
	  end

end
