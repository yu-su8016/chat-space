# README
## chatspace DB設計
### groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

#### Association
- belongs_to :group
- belongs_to :user

### groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

#### Association
- has_many :groups_users
- has_many :messages
- has_many :users

### userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false|
|groups_users_id|integer|null: false, foreign_key: true|

#### Association
- has_many :groups_users
- has_many :messages
- has_many :groups

### messageテーブル
|Column|Type|Options|
|------|----|-------|
|body|text| |
|image|string| |
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

#### Association
- belongs_to :group
- belongs_to :user



This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
