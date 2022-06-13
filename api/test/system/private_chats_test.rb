require "application_system_test_case"

class PrivateChatsTest < ApplicationSystemTestCase
  setup do
    @private_chat = private_chats(:one)
  end

  test "visiting the index" do
    visit private_chats_url
    assert_selector "h1", text: "Private chats"
  end

  test "should create private chat" do
    visit private_chats_url
    click_on "New private chat"

    click_on "Create Private chat"

    assert_text "Private chat was successfully created"
    click_on "Back"
  end

  test "should update Private chat" do
    visit private_chat_url(@private_chat)
    click_on "Edit this private chat", match: :first

    click_on "Update Private chat"

    assert_text "Private chat was successfully updated"
    click_on "Back"
  end

  test "should destroy Private chat" do
    visit private_chat_url(@private_chat)
    click_on "Destroy this private chat", match: :first

    assert_text "Private chat was successfully destroyed"
  end
end
