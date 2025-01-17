import { StyleSheet } from 'react-native';
import { border, dimensions } from '@nft/styles';
import { AlignTypes } from '@nft/utils/enum';

const styles = StyleSheet.create({
  container: {
    height: dimensions.height60,
    borderRadius: border.radius.md6,
    width: dimensions.widthFull,
    justifyContent: AlignTypes.CENTER,
    alignItems: AlignTypes.CENTER,
    flexDirection: AlignTypes.ROW,
  },
  icon: {
    marginRight: dimensions.spacingInlineXxs12,
  },
});

export default styles;
