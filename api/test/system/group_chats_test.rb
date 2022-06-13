require "application_system_test_case"

class GroupChatsTest < ApplicationSystemTestCase
  setup do
    @group_chat = group_chats(:one)
  end

  test "visiting the index" do
    visit group_chats_url
    assert_selector "h1", text: "Group chats"
  end

  test "should create group chat" do
    visit group_chats_url
    click_on "New group chat"

    click_on "Create Group chat"

    assert_text "Group chat was successfully created"
    click_on "Back"
  end

  test "should update Group chat" do
    visit group_chat_url(@group_chat)
    click_on "Edit this group chat", match: :first

    click_on "Update Group chat"

    assert_text "Group chat was successfully updated"
    click_on "Back"
  end

  test "should destroy Group chat" do
    visit group_chat_url(@group_chat)
    click_on "Destroy this group chat", match: :first

    assert_text "Group chat was successfully destroyed"
  end
end
