import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Felipe Vitória</Text>
          <Text color="gray.300" fontSize="sm">
            felipervitoria@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Felipe Vitória" src="https://github.com/soriin7.png"></Avatar>
    </Flex>
  );
}