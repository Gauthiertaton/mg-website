Rails.application.routes.draw do
  root to: 'pages#home'
  get 'marionhenrio', to: 'pages#marionhenrio' # waiting page after free a meal
  get 'gauthiertaton', to: 'pages#gauthiertaton'
end
