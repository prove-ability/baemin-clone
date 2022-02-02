import _ from "lodash"
import * as styles from "./row.css"

export type IRow = {
	[key in string]: string | number
}

interface Props {
	row: IRow
}

const Row: React.FC<Props> = ({ row }) => {
	return (
		<tr className={styles.tr}>
			{_.map(row, (item, index) => (
				<td key={`item-${index}`} className={styles.td}>
					{item}
				</td>
			))}
		</tr>
	)
}

export default Row
