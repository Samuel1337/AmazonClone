Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:new, :create]
    resources :products, only: [:show, :index]
    resources :reviews, only: [:index, :create, :update, :destroy]
    resources :cart_items, only: [:index, :create, :update, :destroy]
    resources :categories, only: [:index] do
      resources :products, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    get "products/search/:search_term", :to => "products#index"
  end
end
