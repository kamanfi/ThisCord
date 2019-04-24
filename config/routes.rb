Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount ActionCable.server, at: '/cable'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create,:destroy]
    resources :servers, only: [:create,:index,:show,:destroy]
    resources :text_channels, only: [:create,:index,:show,:destroy]
    resources :direct_messages, only: [:create,:index,:show]
      get '/join', to: 'servers#join'
  end

  root "static_pages#root"
end
