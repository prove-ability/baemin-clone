import _ from "lodash";
import Row, { IRow } from "./row";
import * as styles from "./list.css";

interface Props {
	headers?: string[];
	rows: IRow[];
}

const List: React.FC<Props> = ({ headers, rows }) => {
	return (
		<table className={styles.table}>
			{headers && (
				<thead>
					<tr className={styles.tr}>
						{_.map(headers, (header, index) => (
							<th key={`header-${index}`} className={styles.th}>
								{header}
							</th>
						))}
					</tr>
				</thead>
			)}
			<tbody>
				{_.map(rows, (row, index) => (
					<Row key={`row-${index}`} row={row} />
				))}
			</tbody>
		</table>
	);
};

export default List;
