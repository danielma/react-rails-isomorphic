class HomeController < ApplicationController
  def index
  end

  def show
    render text: '', layout: 'application'
  end
end
