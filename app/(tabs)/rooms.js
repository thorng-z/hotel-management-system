import { View, Text, TextInput, Button, FlatList } from "react-native";
import { useState } from "react";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [name, setName] = useState("");

  const addRoom = () => {
    setRooms([...rooms, { id: Date.now().toString(), name }]);
    setName("");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Rooms</Text>

      <TextInput
        placeholder="Room Name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginVertical: 10 }}
      />

      <Button title="Add Room" onPress={addRoom} />

      <FlatList
        data={rooms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}