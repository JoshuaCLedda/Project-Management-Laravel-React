import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid'


export default function TableHeading({ name,
    sortable = true,
    sort_field = null,
    sort_direction = null,
    sortChanged = () => { },
    children,
}) {
    return (
        <th onClick={e => sortChanged('id')} className="cursor-pointer border p-2 flex items-center justify-between">ID
            <div>
                <ChevronUpIcon className={
                    // we need spacing here
                    "w-4 " +
                    (sort_field === "id" &&
                        sort_direction === "asc"
                        ? "text-white"
                        : "")
                }
                />
                <ChevronDownIcon className={
                    "w-4 " +
                    (sort_field === "id" &&
                        sort_direction === "desc"
                        ? "text-white"
                        : "")
                } />
            </div>

        </th>

    )
}